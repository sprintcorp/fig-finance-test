import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getEventsAction, getEventsByCategory} from "../redux/actions/EventAction";
import SliderComponent from "../components/SliderComponent";
import {getCategoriesAction} from "../redux/actions/CategoryAction";

function HomeScreen() {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({});
  const defaultLimit = 9;


  const events = useSelector((state) => state.eventList);
  const categories  = useSelector((state) => state.categoryList);

  console.log(events.pagination);

  useEffect(() => {
    dispatch(getEventsAction(defaultLimit));
    dispatch(getCategoriesAction())
  },[dispatch]);

  const Click = (data) => {
    setEvent(data)
  }

  const paginateFilter = (limit,page) =>{
    dispatch(getEventsAction(limit,page));
  }

  const Change = (data) =>{
    dispatch(getEventsAction(data));
  }

  const filterEventByCategory = (data) =>{
    dispatch(getEventsByCategory(data));
  }




  const getAllEvent = () =>{
    dispatch(getEventsAction());
  }

  return (

    <>
      <div className="container">
        <SliderComponent/>
        <div className="h5">Categories (Click to filter event by interest)</div>
        <div className="row mt-3 text-center">
          {categories.categories && categories.categories.length > 1 ? (
            <div className="col-sm-3 mb-3" onClick={()=>getAllEvent()}>
              <div className="card category-card">
                <h5 className="card-title">All</h5>
              </div>
            </div>
          ) : ''}
          {categories.categories && categories.categories.map((category) => (
          <div key={category._id} className="col-sm-3 mb-3" onClick={()=>filterEventByCategory(category._id)}>
            <div className="card category-card">
              <h5 className="card-title">{category.name}</h5>
            </div>
          </div>
            ))}

        </div>
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-md-8">Events</div>

          <div className="col-md-3">
          <select className="form-select" onChange={(e)=>Change(e.target.value)} aria-label="Default select example">
            <option value="all">All</option>
            <option value="9">9</option>
            <option value="15">15</option>
          </select>
        </div>
        </div>

        <div className="event-body mt-3">
          <div className="row d-flex">
            {events.loading ? (
              <div className="col-md-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : events.error ? (
              <div className="col-md-12 text-center card p-5">
                Error Loading Event... Pls be patient as we resolve this error
              </div>
            ) : events.events.length === 0 && !events.loading ? (
              <div className="col-md-12 text-center">
                No event available at the moment
              </div>
            ) : (
              <>
                {events.events.map((event) => (
                  <div className="col-md-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ () => Click(event)} key={event._id}>
                    <div className="card" data-bs-toggle="tooltip" data-bs-placement="top"
                         data-bs-custom-class="custom-tooltip"
                         title="Click to view more information">
                      <div className="card-header">
                        {event.category && event.category.name}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description.length > 70
                          ? event.description.substring(0, 70)+'...read more' : event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>

            )}
          </div>

          <nav aria-label="Page mt-3 navigation example">
            <ul className="pagination justify-content-end">
              {events.pagination && events.pagination.prev ? (
                <li className="page-item" onClick={()=>paginateFilter(events.pagination.prev.limit,events.pagination.prev.page)}>
                  <span className="page-link">Previous</span>
                </li>
              ): (
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
              )}
              {events.pagination && events.pagination.next ? (
              <li className="page-item" onClick={()=>paginateFilter(events.pagination.next.limit,events.pagination.next.page)}>
                <span className="page-link">Next</span>
              </li>
                ): (
                <li className="page-item disabled">
                  <span className="page-link">Next</span>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{event.category && event.category.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Topic: {event && event.title}</p>
              <p>Virtual: {event && String(event.isVirtual).toUpperCase()}</p>
              <p>Date: {event && event.date}</p>
              <p>Address: {event && event.address}</p>
              <p>Description: {event && event.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

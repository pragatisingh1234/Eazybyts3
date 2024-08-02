import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { BsDiagram3, BsLightning } from "react-icons/bs";
import { CiCalendarDate, CiPlay1 } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { PiListDashesBold, PiNotebookDuotone } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import loadingAnimation from "../../assets/animation/animation.json";
import { useEffect, useState } from "react";



const EventDetails = () => {
  const params = useParams();
  const [filteredEvent, setFilteredEvent] = useState([])


  //const recommendedEvents = events.filter(({ _id }) => _id !== event._id)

  const fetchEvents = async () => {
    const response = await fetch(
      `http://localhost:8080/events/${params._id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: event = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const recentEvents = async () => {
    const response = await fetch(
      "http://localhost:8080/events"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: allEvents = [],
    
  } = useQuery({
    queryKey: ["allEvents"],
    queryFn: recentEvents,
  });

  useEffect(() => {
    const filteredRecentEvent = allEvents?.filter(event => event._id !== params._id)
    setFilteredEvent(filteredRecentEvent);

  }, [allEvents, params._id])


  if (isLoading) {
    return (
      <Lottie
        className="flex justify-center items-center min-h-[70%]"
        animationData={loadingAnimation}
        width={500}
        height={350}
      />
    );
  }
  

  if (error) {
    return <p>Error loading events: {error.message}</p>;
  }

  const dateFormat = new Date(event.date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = dateFormat.toLocaleDateString('en-US', options);

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <div className="h-[500px] bg-black bg-opacity-70 relative">
          <div className="absolute top-60 left-8 md:left-36 ">
            <h1 className="text-5xl text-white font-bold">Event Details</h1>
            <p className="text-xl mt-2 flex items-center gap-2 text-white">
              <Link to={'/events'}><span className="underline">Events</span></Link> <CiPlay1 className="text-pink-600" />{" "}
              <span className="text-teal-600">Event Details</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 mt-24 max-w-screen-xl mx-auto px-4 ">
        <div className="lg:col-span-5">
          <div>
            <img
              className="w-full lg:w-[95%] h-96 object-cover rounded-md"
              src={event.image}
              alt={event.title}
            />
            <div className="flex justify-between md:max-w-[780px] lg:max-w-[830px] ml-2 mt-6">
              <p className="flex items-center text-sm gap-2">
                <CiCalendarDate className="text-xl text-teal-600" />
                {formattedDate}
              </p>
              <p className="flex items-center gap-2 text-teal-600 font-semibold text-xl">
                <BsDiagram3 className="text-xl" />
                {event.seat} Seat
              </p>
              <p className="flex items-center gap-1 text-sm">
                <VscLocation className="text-2xl text-teal-600" />
                {event.location}
              </p>
            </div>
            <div className="flex text-sm md:flex-row flex-col gap-4 border-y py-4 my-6 justify-around max-w-[840px]">
              <div className="flex gap-3 md:gap-16 lg:gap-24">
                <div className="flex gap-3 items-center ">
                  <PiListDashesBold className="text-teal-600 text-xl" />
                  <div>
                    <p className="font-semibold">Event Type</p>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <HiOutlineSpeakerphone className="text-teal-600 text-xl" />
                  <div>
                    <p className="font-semibold">Speaker</p>
                    <p>10 Best Speaker</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <BsLightning className="text-red-500 text-xl" />
                  <div>
                    <p className="font-semibold">Sponsor</p>
                    <p>Event Lab</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="text-yellow-400 font-bold text-xl">☆☆☆☆☆</p>
                <p>(260)</p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 md:flex justify-center gap-3 my-6">
            <div className="bg-teal-600 text-white px-5 py-1 rounded-md text-center">
              <span className="text-xl font-semibold">$</span>
              <span className="text-3xl font-semibold tracking-tight ">89</span>
              <span className="ms-1 font-normal">/seat</span>
            </div>
            <Link to={`/payment/${params._id}`}>
              <button className="bg-teal-600 px-4 py-2 text-2xl w-60 text-center text-white rounded-md flex items-center  gap-2">
                <IoTicketOutline className="text-3xl" />
                Get The Ticket
              </button>
            </Link>
          </div>


          <div>
            <h2 className="text-2xl font-semibold max-w-[850px]">
              {event.title}
            </h2>
            <p className="mt-5 text-gray-600 leading-loose max-w-[850px]">
              {event.description}
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:gap-6 lg:gap-0 max-w-[840px] lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <ul className="space-y-4 mt-5 text-lg font-medium">
               
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Unlimited Coffe & Tea .
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Comfortable Seating Areas.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Wi-Fi Access.
                </li>
                <li className="flex items-center gap-2">
                  <TiTick className="text-2xl" />
                  Lunch & Refreshments.
                </li>
              </ul>
            </div>
            <div className="flex gap-8">
              <img
                className="w-[38%] md:w-[48%] rounded-tr-md rounded-bl-md h-52"
                src="https://i.ibb.co/mGZ71df/pexels-rdne-stock-project-7648306.jpg"
                alt=""
              />
              <img
                className="w-[38%] md:w-[48%] rounded-tl-md rounded-br-md h-52"
                src="https://i.ibb.co/9qNw5xs/leadership.jpg"
                alt=""
              />
            </div>
          </div>
          <p className="mt-8 text-gray-600 max-w-[850px]">
            Discover the latest trends with us. Engage with
            our experts to bring forth your dream to reality.
          </p>

          

          
        </div>
        <div>

          <div className="bg-base-200 py-5 lg:w-96">
            <h2 className="bg-teal-600 px-4 py-2 text-2xl w-60 text-center text-white rounded-r-md flex items-center gap-2">
              <PiNotebookDuotone className="text-3xl" />
              Recent Event
            </h2>
            <div className="lg:pl-5 px-4 pt-4 mt-3 space-y-5">
              {
                filteredEvent?.slice(0, 4).map(event => <div key={event._id} className="flex gap-4 items-center">
                  <img
                    className="w-40 h-28 rounded-md"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">
                      {event.title}
                    </h3>
                    
                      <p className="flex items-center text-sm gap-2">
                        <CiCalendarDate className="text-sm" />
                        {event.date.slice(0, 10)}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-red-600 font-semibold ">
                        <BsDiagram3 className="text-sm" />
                        {event.seat} Seat
                      </p>
                    
                  </div>
                </div>)
              }
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

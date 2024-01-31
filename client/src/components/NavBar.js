import logo from '../pictures/logo.png' 

export default function NavBar(props) {
    return (
        <div className="flex gap-5 justify-between items-stretch text-3xl font-bold text-black max-md:flex-wrap">
          <img
            loading="lazy"
            src= {logo}
            className="object-center max-w-full aspect-[1.47] w-[253px]"
          />
          <div className="flex flex-col flex-1 justify-center items-end px-16 py-8 my-auto bg-rose-200 rounded-[50px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-stretch mr-14 max-w-full w-[944px] max-md:flex-wrap max-md:mr-2.5">
              <div className="my-auto">Home</div>
              <div className="flex-auto">Upcoming Events</div>
              <div className="flex-auto my-auto">Past Events</div>
              <div className="flex-auto">Contact Us</div>
              <div className="grow whitespace-nowrap">Sign In/Up</div>
            </div>
          </div>
        </div>
      );
}



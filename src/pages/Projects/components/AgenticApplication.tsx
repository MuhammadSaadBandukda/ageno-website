type TAgenticApplication = {
  title: string;
  description: string;
  image: string;
};

const datas: TAgenticApplication[] = [
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello World",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hello Dunya",
    description:
      " Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const AgenticApplication = () => {
  return (
    <div className="grid grid-cols-3">
      {datas.map((data,index)=>(
      <div key={index} className="relative w-full  isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
        <img
          src={data.image}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">{data.title}</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {data.description}

        </div>
      </div>

      ))}
      </div>

  );
};

export default AgenticApplication;

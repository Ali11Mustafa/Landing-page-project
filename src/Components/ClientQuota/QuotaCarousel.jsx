import ClinetQuota from "./ClientQuta"
const Clients = () => {
  return (
    <section className='w-full h-[700px] md:h-[1048px] bg-primary flex flex-col items-center mb-[400px] gap-20 overflow-hidden'>
      <h2 className='text-white text-2xl md:text-5xl mt-10 md:mt-50'>Our clients opinions</h2>
      <ClinetQuota />
    </section>
  );
};

export default Clients;
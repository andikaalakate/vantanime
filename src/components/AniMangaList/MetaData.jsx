const MetaData = async ({title, detail}) => {
  return (
    <>
      <div className="w-36 flex flex-col justify-center items-center rounded-lg border bg-color-dark border-slate-500 shadow-lg p-2 hover:scale-105 transition-all duration-500">
        <h3 className="mini:text-sm font-bold">{title}</h3>
        <p className="mini:text-sm">{detail}</p>
      </div>
    </>
  );
}

export default MetaData
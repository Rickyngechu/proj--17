import { Link } from "react-router-dom";

function Country({ cdata }) {
  return (
    <Link to={`${cdata.name.common}`}>
      <div className="dark:bg-Dark-Blue  bg-white rounded-md overflow-hidden shadow-2xl dark:shadow-none">
        <div className="h-48 ">
          <img
            src={cdata.flags.png}
            alt={cdata.name.common}
            className="h-full w-full object-cover"
          />
        </div>

        <ul className="py-4 px-6 dark:text-white text-Very-Dark-Blue1 ">
          <li className=" text-xl mb-4">{cdata.name.common}</li>
          <li>
            Population:
            <span className="text-Dark-Gray">
              {cdata.population.toLocaleString()}
            </span>
          </li>
          <li>
            Region:{" "}
            <span className="dark:text-Dark-Gray text-Very-Dark-Blue1">
              {cdata.region}
            </span>
          </li>
          <li>
            Capital:{" "}
            <span className="dark:text-Dark-Gray text-Very-Dark-Blue1">
              {cdata.subregion}
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Country;

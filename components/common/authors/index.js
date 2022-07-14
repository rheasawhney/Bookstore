import { authors } from "../../../utils/author";

export default function Authors() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Popular Authors</h2>
            </div>
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
            >
              {authors.map((person) => (
                <li key={person.author}>
                  <div className="space-y-4">
                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageLink} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{person.author}</h3>
                        <p className="text-indigo-600">{person.language}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
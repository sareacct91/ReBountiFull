import * as categories from "../../../assets/category/index.js";

export default function Category() {
  const categoryData = [
    { name: "vegetable", source: categories.vegetable },
    { name: "seafood", source: categories.seafood },
    { name: "nuts", source: categories.nuts },
    { name: "misc", source: categories.misc },
    { name: "meat", source: categories.meat },
    { name: "grain", source: categories.grain },
    { name: "fruits", source: categories.fruits },
    { name: "dairy", source: categories.dairy },
  ];

  return (
    <div className="mx-2 my-12 grid grow grid-cols-4 gap-4 max-sm:grid-cols-2">
      <div className="col-span-full text-2xl text-black">
        <p>Browse by Category</p>
      </div>
      {categoryData.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={category.source}
            alt={category.name}
            className="mb-2 h-32 w-32 rounded-full object-cover max-sm:w-28 max-sm:h-28"
          />
          <p className="text-gray-700">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

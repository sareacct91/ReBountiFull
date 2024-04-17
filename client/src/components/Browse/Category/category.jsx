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
    <div className="mx-2 my-12 grid grid-cols-4 gap-4">
      <div className="col-span-full text-4xl text-black">
        <p>Browse by Category</p>
      </div>
      {categoryData.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={category.source}
            alt={category.name}
            className="mb-2 h-20 w-20 rounded-full object-cover"
          />
          <p className="text-gray-700">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

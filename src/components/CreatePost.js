import { useState } from "react";

function CreatePost() {
  const [category, setCategory] = useState("");
  const [dynamicFields, setDynamicFields] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    let fields = {};
    if (selectedCategory === "Penthouse") {
      fields = {
        name: "", buildingName: "", city: "", state: "", country: "", floorNumber: 0, size: 0, bedrooms: 0,
        bathrooms: 0, terraceSize: 0, price: 0, amenities: "", luxuryFeatures: "", description: "", floorPlan: "",
        views: 0, followers: 0, isFeatured: false, isFollowed: false, isAvailable: true, schools: "", parks: "",
        transportation: "", attractions: ""
      };
    } else if (selectedCategory === "Mansion") {
      fields = {
        name: "", city: "", state: "", country: "", coordinates: "", floorPlan: "", bedrooms: 0, bathrooms: 0,
        size: 0, price: 0, amenities: "", description: "", schools: "", parks: "", transportation: "", attractions: "",
        isAvailable: true, status: "Available", views: 0, followers: 0, isFeatured: false, isFollowed: false
      };
    } else if (selectedCategory === "Luxury Collectible") {
      fields = {
        name: "", category: "Watches", brand: "", year: 0, price: 0, description: "", length: 0, width: 0, height: 0,
        materials: "", isAvailable: true
      };
    } else if (selectedCategory === "Property") {
      fields = { title: "", location: "" };
    }
    setDynamicFields(fields);
    setImages([]);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDynamicFields({ ...dynamicFields, [name]: type === "checkbox" ? checked : value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    let apiUrl = "";
    let payload = { ...dynamicFields };

    if (category === "Penthouse") {
      apiUrl = "https://patient-unity-production.up.railway.app/penthouses";
      payload = {
        ...payload,
        location: { city: payload.city, state: payload.state, country: payload.country },
        floorNumber: Number(payload.floorNumber),
        size: Number(payload.size),
        bedrooms: Number(payload.bedrooms),
        bathrooms: Number(payload.bathrooms),
        terraceSize: Number(payload.terraceSize),
        price: Number(payload.price),
        views: Number(payload.views),
        followers: Number(payload.followers),
        amenities: payload.amenities.split(","),
        neighborhoodDetails: {
          schools: payload.schools.split(","),
          parks: payload.parks.split(","),
          transportation: payload.transportation.split(","),
          attractions: payload.attractions.split(","),
        },
        images: images.map((file) => URL.createObjectURL(file)),
      };
    } else if (category === "Mansion") {
      apiUrl = "https://patient-unity-production.up.railway.app/mansions";
      payload = {
        ...payload,
        location: {
          city: payload.city,
          state: payload.state,
          country: payload.country,
          coordinates: payload.coordinates.split(",").map(Number),
        },
        bedrooms: Number(payload.bedrooms),
        bathrooms: Number(payload.bathrooms),
        size: Number(payload.size),
        price: Number(payload.price),
        amenities: payload.amenities.split(","),
        neighborhoodDetails: {
          schools: payload.schools.split(","),
          parks: payload.parks.split(","),
          transportation: payload.transportation.split(","),
          attractions: payload.attractions.split(","),
        },
        images: images.map((file) => URL.createObjectURL(file)),
      };
    } else if (category === "Luxury Collectible") {
      apiUrl = "https://patient-unity-production.up.railway.app/luxury-collectibles";
      payload = {
        ...payload,
        category: payload.category.charAt(0).toUpperCase() + payload.category.slice(1),
        year: Number(payload.year),
        price: Number(payload.price),
        dimensions: {
          length: Number(payload.length),
          width: Number(payload.width),
          height: Number(payload.height),
        },
        materials: payload.materials.split(","),
        images: images.map((file) => URL.createObjectURL(file)),
      };
    } else if (category === "Property") {
      apiUrl = "https://patient-unity-production.up.railway.app/property";
      payload = {
        ...payload,
        image: URL.createObjectURL(images[0]),
      };
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Post created successfully!");
        setDynamicFields({});
        setCategory("");
        setImages([]);
      } else {
        setMessage("Error creating post.");
      }
    } catch (error) {
      setMessage("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded mt-10">
      <h2 className="text-xl font-semibold mb-4">Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Category</label>
        <select className="w-full p-2 border rounded mb-4" value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Mansion">Mansion</option>
          <option value="Luxury Collectible">Luxury Collectible</option>
          <option value="Property">Property</option>
        </select>

        {Object.keys(dynamicFields).map((field) => (
          <div key={field}>
            {typeof dynamicFields[field] === "boolean" ? (
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name={field}
                  className="mr-2"
                  checked={dynamicFields[field]}
                  onChange={handleInputChange}
                />
                <label className="font-semibold">{field.replace(/([A-Z])/g, " $1").trim()}</label>
              </div>
            ) : (
              <>
                <label className="block mb-2 font-semibold">{field.replace(/([A-Z])/g, " $1").trim()}</label>
                <input
                  type={["price", "size", "bedrooms", "bathrooms", "floorNumber", "year", "views", "followers"].includes(field) ? "number" : "text"}
                  name={field}
                  className="w-full p-2 border rounded mb-4"
                  placeholder={`Enter ${field}`}
                  value={dynamicFields[field] || ""}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
        ))}

        <label className="block mb-2 font-semibold">Upload Images</label>
        <input type="file" multiple className="w-full p-2 border rounded mb-4" onChange={handleImageChange} />

        {images.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="Preview" className="w-full h-24 object-cover rounded" />
            ))}
          </div>
        )}

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4" disabled={loading}>
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
}

export default CreatePost;

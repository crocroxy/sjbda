import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Starter AquaGrow Kit",
    description: "Perfect for beginners with all essentials included. This compact system is ideal for growing herbs and small vegetables at home.",
    price: "$54.99",
    isQuote: false,
    image: {
      src: "/products/basic1.jpg",
      width: 400,
      height: 300
    },
    features: [
      "Space-efficient design",
      "Easy assembly and maintenance",
      "Includes fish, plants, and nutrients to start",
      "Detailed instruction manual"
    ]
  },
  {
    id: 2,
    name: "Commercial AquaGrow System",
    description: "High-capacity system for small businesses and serious enthusiasts. Designed for higher yields and professional applications.",
    price: "Contact for quote",
    isQuote: true,
    image: {
      src: "/products/commercial.jpg",
      width: 400,
      height: 300
    },
    features: [
      "Modular, expandable design",
      "Automated monitoring system",
      "Technical support and consultation",
      "Custom setup options available"
    ]
  },
  {
    id: 3,
    name: "Intermediate Home System",
    description: "Premium features for serious home growers. A step up from our starter kit with enhanced capabilities.",
    price: "$259.99",
    isQuote: false,
    image: {
      src: "/products/basic.jpg",
      width: 400,
      height: 300
    },
    features: [
      "Larger growing capacity",
      "Enhanced filtration system",
      "Mobile app monitoring",
      "Expandable growing areas"
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-600 to-teal-700">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Our Aquaponics Systems</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-medium">
            Discover our range of aquaponics solutions for every need, from beginners to professionals
          </p>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={product.image.src}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-teal-700 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Features:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.isQuote ? (
                      <Link href="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                        Get Quote
                      </Link>
                    ) : (
                      <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect aquaponics system for your needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

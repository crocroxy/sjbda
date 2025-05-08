import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  {
    icon: '🌱',
    title: 'Sustainable',
    description: 'Eco-friendly systems that conserve water and energy'
  },
  {
    icon: '🐟',
    title: 'Fresh Produce',
    description: 'Grow organic fish and vegetables year-round'
  },
  {
    icon: '🏆',
    title: 'Expert Support',
    description: '10+ years of aquaponics experience backing every product'
  }
];

const testimonials = [
  {
    quote: "We Started Growing Fresh Produce In Our Classrooms And Its Been Great!",
    author: "Miss Hanson, Geography Teacher & Urban Farmer"
  },
  {
    quote: "Im Doing This Because Of Boredom And A Bottle Of Fanta",
    author: "Ray Rahym, Aquaponics Enthusiast"
  }
];

const products = [
  {
    id: 1,
    name: "Starter AquaGrow Kit",
    description: "Perfect for beginners with all essentials included",
    price: "$54.99",
    isQuote: false,
    image: {
      src: "/products/basic1.jpg",
      width: 400,
      height: 300
    }
  },
  {
    id: 2,
    name: "Commercial AquaGrow System",
    description: "High-capacity system for small businesses",
    price: "Contact for quote",
    isQuote: true,
    image: {
      src: "/products/commercial.jpg",
      width: 400,
      height: 300
    }
  },
  {
    id: 3,
    name: "Intermediate Home System",
    description: "Premium features for serious home growers",
    price: "$259.99",
    isQuote: false,
    image: {
      src: "/products/basic.jpg",
      width: 400,
      height: 300
    }
  }
];

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with animated gradient background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Sustainable Aquaponics Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Grow fresh, organic produce with our innovative aquaponics systems
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 rounded-full bg-white text-teal-600 font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Shop Now</span>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
              <span className="relative z-10">Our Story</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-lg mb-8 text-gray-800">
              Founded in 2025, AquaGrow Systems began with a simple mission: to make sustainable food production accessible to everyone. What started as a backyard experiment has grown into a leading provider of home aquaponics solutions.
            </p>
            <Link
              href="/about"
              className="relative inline-block px-6 py-3 overflow-hidden rounded-md group active:scale-95 transition-all duration-300"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300"></span>
              <span className="relative text-white font-medium">Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose AquaGrow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-teal-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full max-w-sm group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image.src}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -z-10 w-64 h-64 rounded-full bg-teal-50 blur-3xl opacity-70 top-0 right-0 group-hover:bg-teal-100 transition-colors duration-300"></div>
                  <h3 className="text-xl font-semibold text-teal-600 mb-2 group-hover:text-teal-700 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.isQuote ? (
                      <a
                        href="#contact"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium relative overflow-hidden group inline-block active:scale-95 transition-all duration-300"
                      >
                        <span className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 transition-all duration-300 group-hover:h-full"></span>
                        <span className="relative z-10">Get Quote</span>
                      </a>
                    ) : (
                      <button
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium relative overflow-hidden group active:scale-95 transition-all duration-300"
                      >
                        <span className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 transition-all duration-300 group-hover:h-full"></span>
                        <span className="relative z-10">Add to Cart</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with animated background */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-blue-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <p className="text-lg italic mb-4 text-black">{testimonial.quote}</p>
                <p className="font-semibold text-black">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import logo from "../assets/logo2.jpg"; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 flex items-center justify-center flex-col">
      <img
        src={logo}
        alt="Company Logo"
        className="w-48 h-48 mb-8 rounded-full object-cover"
      />
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Nuestra Tienda!</h1>
      <p className="text-lg max-w-xl text-center">
      Encuentra los mejores accesorios y artículos únicos para tu perro salchicha. Desde collares personalizados hasta juguetes diseñados especialmente para su estilo de vida. ¡Todo lo que tu salchicha necesita en un solo lugar!
      </p>
    </section>
  );
};

export default Hero;

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold">
          NorthPeak Digital
        </h2>

        <p className="text-gray-200 mt-3">
          Helping businesses grow through modern digital solutions.
        </p>

        <hr className="my-6 border-gray-700"/>

        <p className="mt-4 text-sm text-gray-400">
          Built for Digital Heroes Training Task |{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            digitalheroesco.com
          </a>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
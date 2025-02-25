export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">NBBC</h3>
            <p>Your trusted business partner</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Email: contact@nbbc.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} NBBC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
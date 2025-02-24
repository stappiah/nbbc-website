
export default function AboutSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80"
              alt="Church Cross" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-[#0D92F4] mb-4">SALVATION</h2>
            <h3 className="text-xl text-[#FFB200] mb-6">PLACE YOUR FAITH IN JESUS</h3>
            
            <p className="text-gray-600 mb-6">
              The world has a sin problem, and no one is immune to it. The Bible tells us that there is a punishment for all who sin, and that is eternal separation from God. However, in the midst of our inability to change this problem, God sent His Son, Jesus Christ, to be the solution. It is only through Him, through His great sacrifice, that we are able to have a relationship with God and be saved from our own failures and from the eternity we really deserve.
            </p>
            
            <p className="text-gray-600 mb-8">
              The invitation is to admit one's sin and inability to do anything about it, to believe in Him and the Gospel story, and to confess Him as Lord of one's life.
            </p>

            <p className="text-gray-600 mb-6">
              If you want to know more about salvation, please give our church a call and ask to speak to someone in the evangelism department or contact us and a pastor will reach out to you shortly.
            </p>

            <p className="text-sm text-[#0D92F4] mb-8">
              John 3:16 | Romans 3:23 | Romans 5:8 | Romans 6:23 | Romans 10:9-10, 13
            </p>

            <button className="bg-[#0D92F4] text-white px-6 py-3 rounded hover:bg-[#FFB200] transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
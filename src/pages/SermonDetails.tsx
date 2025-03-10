import Banner from "../components/common/Banner"
import video from '../assets/video.mp4'
import sermonAudio from '../assets/audio.mp3' // import the audio file

export default function SermonDetails() {
  return (
    <div>
      <Banner name="Sermons" center_text="Title of the sermon or something" />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <video
              className="w-full h-[auto] max-h-[400px] sm:max-h-[500px] object-cover"
              controls
              src={video}
              poster="path_to_your_video_poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              Sermon Title
            </h1>
            <p className="text-gray-600 mb-4">
              This is a short description of the sermon. It provides an overview
              of the key themes and messages that will be explored in the
              sermon.
            </p>
            {/* Update the button to download the audio */}
            <a
              href={sermonAudio} // the path to the audio file
              download="audio.mp3'" // specify the download filename
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Download Sermon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

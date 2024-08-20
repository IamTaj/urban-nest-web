"use client"

export default function RotatingText({ text, image, imageStyles }: any) {
  const firstText = text.charAt(0)?.toUpperCase()
  const restText = text.slice(1, text?.length)

  return (
    <div className="flex justify-center items-center text-3xl font-bold">
      {image && (
        <img
          className={`${imageStyles} animate-moveForward`}
          src={image}
          alt="urban-nest"
        />
      )}
      <span className="inline gradient-text">
        <span className="inline-block opacity-0 animate-fadeInAndRotate">
          <p className="gradient-text-red">{firstText}</p>
        </span>
        {restText}
      </span>
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-27deg);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes moveForward {
          from {
            transform: translateX(-90px);
          }
          to {
            transform: translateX(2px); /* Adjust the value as needed */
          }
        }

        .animate-fadeInAndRotate {
          animation: fadeIn 1s forwards, rotate 1s 0.5s forwards;
        }

        .animate-moveForward {
          animation: moveForward 0.7s linear forwards;
        }
      `}</style>
    </div>
  )
}

// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";

// const creatememes = ({
//   searchParams,
// }: {
//   searchParams: { id: string; url: string };
// }) => {
//   const [meme, setMemes] = useState<string | null>(null);
//   const text1 = useRef<HTMLInputElement>(null);
//   const text2 = useRef<HTMLInputElement>(null);

//   const memes = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(text1.current?.value);
//     console.log(text2.current?.value);
//     const data = await fetch(
//       `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
//       {
//         method: "POST",
//       }
//     );
//     const response = await data.json();
//     console.log(response);
//     setMemes(response.data.url);
//   };
//   return (
//     <>
//       <h1 className="text-center mb-6 text-2xl">Create Memes</h1>
//       <div className="m-auto w-[100%] sm:w-[500px] border-2 p-3 rounded-md mt-10">
//         <Image
//           src={searchParams.url}
//           alt="memes"
//           width={500}
//           height={500}
//         ></Image>
//       </div>
//       <br />
//       <form onSubmit={memes}>
//         <input
//           type="text"
//           placeholder="Top Text"
//           ref={text1}
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             fontSize: "16px",
//           }}
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           ref={text2}
//           placeholder="Bottom Text"
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             fontSize: "16px",
//           }}
//         />
//         <br />
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "12px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             fontSize: "16px",
//             borderRadius: "8px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Create Meme
//         </button>
//         <br />
//         {meme && (
//           <div className="mt-4">
//             <h2 className="text-center text-lg">Your Meme:</h2>
//             <Image src={meme} width={200} height={200} alt="meme" />
//           </div>
//         )}
//       </form>
//     </>
//   );
// };

// export default creatememes;
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const creatememes = ({
  searchParams,
}: {
  searchParams: { id: string; url: string };
}) => {
  const [meme, setMemes] = useState<string | null>(null);
  const text1 = useRef<HTMLInputElement>(null);
  const text2 = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false); // State to track loading
  const memes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text1.current?.value);
    console.log(text2.current?.value);
    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method: "POST",
      }
    );
    const response = await data.json();
    console.log(response);
    setMemes(response.data.url);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "24px",
          fontSize: "2rem",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Create Memes
      </h1>
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: "500px",
          border: "2px solid #ddd",
          padding: "16px",
          borderRadius: "10px",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={searchParams.url}
          alt="meme template"
          width={500}
          height={500}
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <br />
      <form onSubmit={memes} style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Top Text"
          ref={text1}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            outline: "none",
            color: "grey",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #4CAF50")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />
        <input
          type="text"
          ref={text2}
          placeholder="Bottom Text"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            outline: "none",
            color: "grey",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #4CAF50")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundImage:
              "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
            color: "white",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundImage =
              "linear-gradient(135deg, #4a60e6 0%, #0009cc 100%)";
            (e.target as HTMLButtonElement).style.boxShadow =
              "0 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundImage =
              "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)";
            (e.target as HTMLButtonElement).style.boxShadow =
              "0 4px 10px rgba(0, 0, 0, 0.1)";
          }}
        >
          Create Meme
        </button>
        <br />
        {loading && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {meme && (
          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontFamily: "Arial, sans-serif",
                color: "#333",
              }}
            >
              Your Meme:
            </h2>
            <Image
              src={meme}
              width={500}
              height={500}
              alt="meme result"
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                marginTop: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                // width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                height: "auto",
              }}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default creatememes;

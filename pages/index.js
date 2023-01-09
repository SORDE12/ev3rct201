import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  
  

  return (
    <>
    <Navbar/>
      <div style={{display:"flex" , flexDirection:"row"}}>
        <div>
          <img
            style={{ borderRadius: "50%" }}
            src={data.avatar_url}
            width={"100px"}
            height={"100px"}
          />
          <h3>{data.name}</h3>
          <p>{data.login}</p>
          <p> Full-stack Web Developer</p>
          <p> JavaScript | NodeJs | ReactJS</p>
          <p> HTML | CSS | ChakraUI</p>
          <div style={{display:"flex", flexDirection:"row" ,gap:"20px", margin:"10px"}}>
            <a href="https://drive.google.com/file/d/1wP0N8_95ZwGsSE-AUrCG3wBBL_x4UtWP/view">
              <button>Resume</button>
            </a>
            <a href="https://github.com/SORDE12">
              <button>Follow</button>
            </a>
            
          </div>
          <p>{data.location}</p>
          <p>Company:{data.company}</p>
        </div>
        <div style={{display:"grid" , gridTemplateColumns:"repeat(2,1fr}", gridTemplateRows:"repeat(5,1fr)"}} >


        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let username = "SORDE12";
  let res = await fetch(`https://api.github.com/users/${username}`);

  let d = await res.json();

  return {
    props: {
      data: d,
    },
  };
}

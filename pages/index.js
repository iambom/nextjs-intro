import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";


export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`)
  }

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map(movie => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
    
  );
}

export async function getServerSideProps() {
// 어떤 코드던 이 안에서 쓰면 서버에서만 작동함
// API key 등을 여기서 써주면 client에서 볼 수 없음
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  // object를 리턴할 수 있고 props라는 키를 가질 수 있다. props 안에는 어떤 것이든 넣을 수 있다. 
  return {
    props: {
      results,
    }
  }
}

/*

1. getServerSideProps()는 서버에서 실행됨
2. 함수 안에서 무엇을 리턴하던지, 이 return한 데이터를 props로써 page에게 줌
3. 하지만 fetch를 이 함수 안에서 할 때, API load가 느려지면 사용자들은 아무것도 못 볼 수 있음 

*/
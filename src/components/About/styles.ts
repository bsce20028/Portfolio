import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
   img{
     margin-top: 2rem;
     width: 350px;
     height: 470px;
     border-radius: 30%;
     object-fit: cover;
     object-position: center;
     filter: grayscale(0);
     transition: filter 0.5s;
     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
     &:hover{
       filter: grayscale(0);
       transform: scale(1.05);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`
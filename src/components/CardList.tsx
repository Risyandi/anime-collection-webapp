import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  text-align: center;
`;

const Card = styled.div`
  width: 300px;
  height: fit-content;
  margin: 16px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0 8px 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease;
  margin-bottom: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardDescription = styled.p`
  margin: 0 8px 8px;
`;

const Button = styled.div`
  background-color: #ea4c89;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  // margin: 0 8px 8px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 100px;
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ea4c89")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0 4px;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;

interface TCard {
  data: {
    [key: string]: any;
  };
}

const CardList = ({ data }: TCard) => {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards: any = data.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <CardContainer>
        {currentCards.map((card: any, index: any) => (
          <Card key={index}>
            <Link to={`/detail/${card.id}`}>
              <CardImage src={card.coverImage.large} alt={card.title} />
              <CardTitle>{card.title.romaji}</CardTitle>
            </Link>
            <CardDescription>{card.description}</CardDescription>
            <Div>
              <Link to={`/detail/${card.id}`}>
                <Button>View Details</Button>
              </Link>
            </Div>
          </Card>
        ))}
      </CardContainer>
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          disabled={indexOfLastCard >= data.length}
          onClick={handleNextPage}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default CardList;

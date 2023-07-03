import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  padding: 16px;
  margin: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 2px;
  margin-right: 2px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  padding: 8px 16px;
  margin: 0 4px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
            <CardTitle>{card.title.romaji}</CardTitle>
            <CardImage src={card.coverImage.large} alt={card.title} />
            <CardDescription>{card.description}</CardDescription>
            <Link to={`/detail/${card.id}`}>
              <Button>View Details</Button>
            </Link>
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

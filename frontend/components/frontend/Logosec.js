import Link from 'next/link';
import styled from 'styled-components'





const Wrapper = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
`;

const Left = styled.div`
    flex:1;
    padding: 10px;
`;

const Right = styled.div`
    flex: 5;
    justify-content: flex-end;
`;

const Image = styled.img`
    width: 180px;
    height: 80px;
    display: block;
    cursor: pointer;
`;

const Banner = styled.img`
    width: 95%;
    margin-left: 39px;
    padding: 15px 0px;
    height: 120px;
    display: block;
    cursor: pointer;
    
`;



const Logosec = () => {
  return (
      <>
        <Wrapper>
            <Left>
                 <Link href="/"><Image src="chalaman.png"/></Link>
            </Left>
                    
            <Right>
                <Link href="https://google.com"><Banner src='logobanner.gif' /></Link>
            </Right> 
        </Wrapper>
      </>
  );
};

export default Logosec;

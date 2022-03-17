import styles from '../../styles/Layout.module.css'
import styled from 'styled-components';



const Wrapper = styled.div`
    // margin-left: 40px;
    // margin-right: 40px;
`;


const Scrollbar = () => {
  return (
      <>
        <Wrapper>
            <div className="row px-4">
                <div className="col-md-1 bg-dark">
                    <h6 className="text-white fw-bold pt-2">শিরোনাম</h6>
                </div>

                <div className="col-md-11 bg-danger">
                <marquee className="text-white fw-bold pt-2">আল জাজিরার প্রতিটি বিষয় খন্ডন করার যথেষ্ট প্রমাণ আছে: জেনারেল আজিজ নিউইয়র্কের ১১০তম মেয়র হিসেবে শুক্রবার শপথ নেবেন এডামস</marquee>
                </div>
            </div>
        </Wrapper>
      </>
  );
};

export default Scrollbar;

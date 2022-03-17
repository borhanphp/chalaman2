import React from 'react';
import Link from 'next/link';

const Postsidebar = () => {
  return (
      <>
                    <div className="col-lg-12 mt-3 panspd pl-0">
						<div className="border border-dark panspd">
							<ul className="nav nav-pills mb-3 justify-content-center justify-content-around" id="pills-tab" role="tablist">
								<li className="nav-item w-50 text-center" role="presentation">
									<a className="nav-link active text-dark strong" id="pills-home-tab" data-toggle="pill" href="#letest" role="tab" aria-controls="pills-home" aria-selected="true">সর্বশেষ</a>
								</li>
								<li className="nav-item w-50 text-center" role="presentation">
									<a className="nav-link text-dark" id=" pills-profile-tab"data-toggle="pill" href="#popular" role="tab" aria-controls="pills-profile" aria-selected="false">সর্বাধিক পঠিত</a>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
								<div class="tab-pane fade show active" id="letest" role="tabpanel" aria-labelledby="pills-home-tab">
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="border-bottom pb-1 px-4"><i className="fas fa-snowflake text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
								</div>
								<div className="tab-pane fade pl-3" id="popular" role="tabpanel" aria-labelledby="pills-profile-tab"> 
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
									<p className="pb-3 border-bottom pb-1 px-4"><i className="fas fa-snowflake pr-2 text-danger"></i><a className="text-dark font-weight-normal" href="#">চলমান ডেস্ক: নির্বাচন কমিশনে (ইসি) সচিব মো. হুমায়ুন কবীর খোন্দকার বলেছেন</a></p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-12 mt-2'>
						
						<Link href='#'>
							<a>
								<img 
									src='../ads3.gif'
									className='w-100'
								/>
							</a>
						</Link>	
					</div>
      </>
  )
}

export default Postsidebar
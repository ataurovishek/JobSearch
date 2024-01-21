import { BiTimeFive } from 'react-icons/bi'

// imported logo 

import adidas from '../../Assets/Adidas.png';
import tiktok from '../../Assets/Tiktok.png'
import Netflix from '../../Assets/Netflix.png'
import Pix from '../../Assets/Pix.png'
import instagram from '../../Assets/instagram.png'
import Chanel from '../../Assets/Chanel.png'
import Adove from '../../Assets/Adove.png'
import Amazon from '../../Assets/Amazon.png'

// For all the jobs we are going to use high order array method called map... 
// In this case we shall list all the jobs into an array called data 

const data = [
    {
        id: 1,
        image: adidas,
        title: 'web Development',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum,dolo sit amet consectetur adpisicing elit,corrupti,lsffgsfgs,',
        company: 'Novac Linus Co.'
    },
    {
        id: 2,
        image: tiktok,
        title: 'UI Designer',
        time: '14Hrs',
        location: 'Manchester',
        desc: 'Lorem ipsum,dolo sit amet consectetur adpisicing elit,corrupti,lsffgsfgs,',
        company: 'Liquid Accessment'
    },
    {
        id: 3,
        image: Pix,
        title: 'Software End',
        time: '10Hrs',
        location: 'Austria',
        desc: 'Lorem ipsum,dolo sit amet consectetur adpisicing elit,corrupti,lsffgsfgs,',
        company: 'Web Tech Agency'
    },
    {
        id: 4,
        image: Amazon,
        title: 'UI/UX Designer',
        time: '10Hrs',
        location: 'Germany',
        desc: 'This a job description to edit in the admin dashboard section if you are posting a new job',
        company: 'Government'
    },
    {
        id: 5,
        image: Adove,
        title: 'Product Designer',
        time: 'Now',
        location: 'Manchester',
        desc: 'This a job description to edit in the admin dashboard section if you are posting a new job',
        company: 'Newcastle'
    },
    {
        id: 6,
        image: Chanel,
        title: 'Researcher',
        time: '5hrs',
        location: 'Norway',
        desc: 'This a job description to edit in the admin dashboard section if you are posting a new job',
        company: 'Nin Co.'
    },
    {
        id: 7,
        image: instagram,
        title: 'Lead Developer',
        time: '14Hrs',
        location: 'Leads',
        desc: 'This a job description to edit in the admin dashboard section if you are posting a new job',
        company: 'Nilmeloi-UK'
    },
    {
        id: 8,
        image: Netflix,
        title: 'Data Scientist',
        time: '2Day',
        location: 'Turkey',
        desc: 'This a job description to edit in the admin dashboard section if you are posting a new job',
        company: 'Nome And Sons'
    }
]



const Job = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 px-10">
                {
                    data.map(({ id, image, title, time, location, desc, company }) => {
                        return (

                            // this will returb a single job post based on the ID
                            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
                        hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg">

                                <span className="flex justify-between items-center gap-4">
                                    <h1 className="text-[16px] font-semibold text-textcolor group-hover:text-white">{title}</h1>

                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        <BiTimeFive />{time}
                                    </span>
                                </span>
                                <h6 className='text-[#ccc]'>{location}</h6>

                                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                    {desc}
                                </p>

                                <div className="company flex items-center gap-2">
                                    <img src={image} alt="" className='w-[15%]' />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                                        {company}
                                    </span>
                                </div>

                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textcolor hover:bg-white group-hover/item:text-textcolor group-hover:text-textcolor'>
                                    Apply Now
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Job;
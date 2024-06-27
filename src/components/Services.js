import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const services =[
  {
    name: 'UI/UX Design ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam similique, corrupti assumenda voluptas modi autem perspiciatis inventore adipisci at.',
    link:'Learn more'
  },
  {
    name: 'Development ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam similique, corrupti assumenda voluptas modi autem perspiciatis inventore adipisci at.',
    link:'Learn more'
  },
  {
    name: 'Digital Marketing ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam similique, corrupti assumenda voluptas modi autem perspiciatis inventore adipisci at.',
    link:'Learn more'
  },
  {
    name: 'Product Branding ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam similique, corrupti assumenda voluptas modi autem perspiciatis inventore adipisci at.',
    link:'Learn more'
  },
]

const Services = () => {
  return <section className='section' id='service'> 
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>

      <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
        <h2 className='h2 text-accent mb-6'> What I Do</h2>
        <h3 className='h3 max-w-[455px] mb-16'>

        I'm a junior Front-end Developer wih over a year of experince.
        </h3>
        <button className=' btn btn-sm'>See my world</button>
      </div>
        <div className='flex-1'>
          <div>
            {
              services.map((service, index) =>  {
                const {name, description, link} = service;  
                return (
                <div key={index}>
                <div className='max-w-[476px]'>
                  <h4 >{name}</h4>
                  <p>{description}</p>
                </div>
                <div>links</div>
              </div>
               );
              })  
            }
          </div>
        </div>
    </div>
  </div>
  
  </section>;
};

export default Services;

import React from 'react'
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const style = {
  links: "text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm",
  nav: "flex flex-col space-y-6"
}

const FooterSecondary = () => {
  return (
    <div className='md:hidden mt-12 border-t border-gray-200 block'>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          About Us
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className={style.nav} pb={4}>
    <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Careers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className={style.nav} pb={4}>
    <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Social Impact
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className={style.nav} pb={4}>
    <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          For Business Partners
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className={style.nav} pb={4}>
    <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Order and Pickup
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className={style.nav} pb={4}>
    <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default FooterSecondary
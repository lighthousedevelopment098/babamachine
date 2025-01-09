import React from 'react'
import PageHeader from './header/detailHeader'
import Gallery from './gallary/Gallery'
import DetailTexts from './detailtext/detailtext'
import RelatedMachines from './relatedData/relatedData'

const stockDetail = () => {
  return (
    <div className='bg-[#2F2F2F] '>
    <PageHeader />
    <Gallery />
    <DetailTexts />
    <RelatedMachines />
    </div>
  )
}

export default stockDetail
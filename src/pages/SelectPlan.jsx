import React from 'react'
import SideNav from '../component/SideNav'

const SelectPlan = () => {
  return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-24 lg:flex-row">
				<SideNav />
				<div></div>
			</div>
		</div>
  );
}

export default SelectPlan
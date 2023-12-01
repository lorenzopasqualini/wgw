'use client';
import { fetchData } from '@/app/action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Card, { ImgProp } from './Card';

let page = 2;

function Load() {
	const [data, setData] = useState<ImgProp[]>([]);
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchData(page).then((res) => {
                page++
				setData([...data, ...res]);
			});
		}
	}, [inView, data]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data.map((item: ImgProp, index: number) => (
					<Card key={item.id} series={item} index={index} />
				))}
			</section>
			<section className="mx-auto">
				<div className="loader1" ref={ref}></div>
			</section>
		</>
	);
}

export default Load;

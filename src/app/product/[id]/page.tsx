import { notFound } from 'next/navigation'
import Image from 'next/image'
import { feature } from '@/data/detail'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = feature.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.img}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl text-gray-500 mb-4">{product.title2}</p>
            <span className="block">PLT.AF.ORM</span>
            <div className="mt-8">
              
              <p className="text-sm md:text-base text-gray-700 mb-6">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "inside out"-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>

              <p className="text-2xl font-bold mb-6">{product.price}</p>
              <div className="w-44">
            <Link href="Cart">
              <p className="flex justify-center items-center lg:w-auto border rounded-full bg-white text-black text-sm md:text-base font-medium py-3 px-6 hover:text-white hover:bg-black">
                Add To Cart
              </p>
            </Link>
            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import { mens_kurta } from '../../../Data/MensKurta'
import { filters, singleFilter } from './FilterData'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import {
  XMarkIcon,
  FunnelIcon,
  PlusIcon,
  MinusIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'


/* ---------- SORT OPTIONS ---------- */
const sortOptions = [
  { name: 'Most Popular' },
  { name: 'Newest' },
  { name: 'Price: Low to High' },
  { name: 'Price: High to Low' },
]

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    let filtersValue = searchParams.getAll(sectionId)

    if(filtersValue.length>0 && filtersValue[0].split(",").includes(value)){
      filtersValue=filtersValue[0].split(",").filter((item)=>item!==value);

      if(filtersValue.length===0){
        searchParams.delete(sectionId)
      }
    }
    else{
      filtersValue.push(value)
    }
    if (filtersValue.length>0) {
      searchParams.set(sectionId,filtersValue.join(","));
      const query = searchParams.toString()
      navigate();
    }
  }


  return (
    <div className="bg-white">

      {/* ================= MOBILE FILTER ================= */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {[...filters, ...singleFilter].map((section) => (
            <Disclosure key={section.id} className="border-b py-4">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between text-sm font-semibold">
                    {section.name}
                    {open ? (
                      <MinusIcon className="h-5 w-5" />
                    ) : (
                      <PlusIcon className="h-5 w-5" />
                    )}
                  </DisclosureButton>

                  <DisclosurePanel className="mt-3 space-y-2">
                    {section.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type={
                            section.id === 'color' || section.id === 'size'
                              ? 'checkbox'
                              : 'radio'
                          }
                          name={section.id}
                        />
                        {option.label}
                      </label>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </DialogPanel>
      </Dialog>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b py-6">
          <h1 className="text-3xl font-bold">Men Kurta</h1>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-1 text-sm">
                Sort
                <ChevronDownIcon className="h-5 w-5" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow rounded">
                {sortOptions.map((option) => (
                  <MenuItem key={option.name}>
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      {option.name}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <Squares2X2Icon className="h-5 w-5 text-gray-400" />

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden"
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            

            {/* ================= DESKTOP SIDEBAR ================= */}
            {/* ================= DESKTOP SIDEBAR ================= */}
<div className="hidden lg:block">

  {/* FILTER HEADER */}
  <div className="flex items-center justify-between pb-4 border-b mb-4 ">
    <h2 className="text-sm font-semibold text-gray-900 opacity-70">
      Filters
    </h2>
    <FunnelIcon className="h-4 w-4 " />
  </div>

  {/* FILTER SECTIONS */}
  <div className="space-y-4">
    {[...filters, ...singleFilter].map((section) => (
      <Disclosure key={section.id} className="border-b pb-4 " >
        {({ open }) => (
          <>
            <DisclosureButton className="flex w-full justify-between text-sm font-medium text-gray-900 ">
              {section.name}
              {open ? (
                <MinusIcon className="h-4 w-4 text-gray-500" />
              ) : (
                <PlusIcon className="h-4 w-4 text-gray-500" />
              )}
            </DisclosureButton>

            <DisclosurePanel className="mt-3 space-y-2">
              {section.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type={
                      section.id === 'color' || section.id === 'size'
                        ? 'checkbox'
                        : 'radio'
                    }
                    name={section.id}
                    className="h-4 w-4"
                  />
                  {option.label}
                </label>
              ))}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
</div>


            {/* ================= PRODUCTS ================= */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mens_kurta.map((item) => (
                <ProductCard key={item.imageUrl} product={item} />
              ))}
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}

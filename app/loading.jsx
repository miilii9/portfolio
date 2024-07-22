import React from 'react'
import LoadingComponent from '@/components/ui/loading/LoadingComponent'
export default function Loading() {
    return (
        <div className='fixed top-0 bg-secondary h-screen w-full flex justify-center items-center z-50'>
            <LoadingComponent />
        </div>
    )
}

'use client';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: "/reviews/memaran_dadeh_logo.jfif",
    name: "معماران داده",
    job: "تولید محتوا و فناوری ",
    review: "مسئولیت پذیر و وقت شناس",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "pjeco",
    job: "تولید محتوا و فناوری ",
    review: "میلاد علاوه بر یه همکار خوب یه دوست حسابیه",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "اوتاپ",
    job: "مشاوره املاک",
    review: "توی کار تیمی و هماهنگ با گروه عالی. با آرزوی موفقیت",
  },

  {
    avatar: "/reviews/avatar-7.png",
    name: "اویم استانبول",
    job: "فروش ملک در ترکیه",
    review: " منظم و دقیق  در  انجام تسک ها و رفتار حرفه ای",
  },
];

const Reviews = () => {
  return (
    <section className='w-full mx-auto flex flex-col justify-center pb-32'>
      <div className=' mx-auto container flex items-center xl:px-48'>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-light p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <div className='rounded-full overflow-hidden w-16 h-16 relative'>
                        <Image
                          src={person.avatar}
                          fill
                          style={{ objectFit: "cover" }}
                          alt=''
                          priority
                        />
                      </div>
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p className='text-sm'>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

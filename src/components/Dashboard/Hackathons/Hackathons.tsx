import { DashboardHackathonType } from '@/lib/types';

import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';
import DashboardHackathonCard from '@/components/Dashboard/Hackathons/DashboardHackathonCard';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DashboardHackathonPage = () => {
  const router = useRouter();
  const [allHackathonsData, setAllHackathonsData] = useState<
    DashboardHackathonType[]
  >([]);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string>('');

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/hackathons/allhackathons`).then(
        (response) => response.json()
      );

      if (res.success) {
        setAllHackathonsData(res.hackathon);
        setInitialLoading(false);
      } else {
        toast.error(res.message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please Try Again', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setAllHackathonsData((prevData) =>
      prevData.filter((data: DashboardHackathonType) => data._id !== deleteId)
    );
  }, [deleteId]);

  return (
    <div className="relative z-10 rounded-3xl ">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
      {initialLoading ? (
        <>loading</>
      ) : (
        <section className="layout flex flex-col gap-2 py-[100px]" id="add-Cfp">
          <div className="flex items-stretch">
            {' '}
            <Heading title="All Hackathons" />
            <Button
              className="ml-20"
              onClick={() => router.push('/add/hackathon')}
            >
              Add Hackathons
            </Button>
          </div>

          <div>
            {allHackathonsData.length > 0 ? (
              <div className="events grid grid-cols-auto-sm gap-7">
                {allHackathonsData.map(
                  (hackathon: DashboardHackathonType, index: number) => (
                    <DashboardHackathonCard
                      hackathon={hackathon}
                      key={index}
                      setDeleteId={setDeleteId}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
                <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                  No hackathons Created
                </span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default DashboardHackathonPage;

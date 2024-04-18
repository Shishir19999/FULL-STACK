import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeComponent from '../components/pages/HomeComponent';
import AboutComponent from '../components/pages/AboutComponent';
import ContactComponent from '../components/pages/ContactComponent';
import NewsComponent from '../components/pages/NewsComponent';
import NewsDetatilsComponent from '../components/pages/NewsDetatilsComponent';
import PageNotFoundComponent from '../components/error/PageNotFoundComponent';

export default function RouterComponent() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="about" element={<AboutComponent />} />
            <Route path="contact" element={<ContactComponent />} />
            <Route path="news" element={<NewsComponent />} />
            <Route path="news-details/:id" element={<NewsDetatilsComponent />} />
            <Route path="*" element={<PageNotFoundComponent />} />

        </Routes>
    </>
  )
}

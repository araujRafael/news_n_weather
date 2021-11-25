import React from 'react'

// response of dataArticles
/* 
 {
  author: '...',
  content: '...',
  description: '...',
  publishedAt: '...',
  source: {...},
  title: '...',
  url: '...',
  urlToImage: '...',
 }      
*/

export function NewsNuget({ news }) {

  return (
    <>

      <div className='container__card'>

        <div className='card'>

          <div className='card__header'>

            <img
              src={news.urlToImage}
              className='card__image'
            />

            <div className='blog-details'>

              <h2 className='blog-title'>
                {news.title}
              </h2>
              <p>{ news.source['name'] } </p>

              <div className='blog-metas'>

                {/* <div className='meta'>
                  <i class="ri-eye-line"></i> 235
                </div>

                <div className='meta'>
                  <i class="ri-thumb-up-line"></i> 105
                </div> */}

                <div className='meta'>
                  <i class="ri-calendar-line"></i> {news.publishedAt
                  .split('T')[0].split('-').reverse().join('/')}
                </div>

              </div> {/* blog-metas */}

            </div>

          </div> {/* card_header */}

          <div className='card__body'>

            {/* <div className='blog-category'>categoria</div> blog-category */}

            <div className='blog-excerpt'>
              <p>
                {news.description}
              </p>


            </div> {/* blog-excerpt */}

            <a
              href={news.url}
              target='_blank'
              className='button'
            >
              Página da Materia
            </a>

          </div> {/* card__body */}

        </div> {/* Cards */}

      </div> {/* Container */}


    </>
  )
}


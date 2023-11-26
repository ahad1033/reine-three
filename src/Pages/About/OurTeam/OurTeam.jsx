import React from 'react';
import blogImg from '../../../assets/images/blog/img-02.jpg'

const OurTeam = () => {
    return (
        <section id="blog-1" class="pt-8 blog-section division">
            <div class="container">


                {/* <!-- SECTION TITLE --> */}
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-title text-center mb-6">

                            {/* <!-- Section ID --> */}
                            <span class="section-id">From The Blog</span>

                            {/* <!-- Title --> */}
                            <h2 class="h2-title">Meet Our Team</h2>

                        </div>
                    </div>
                </div>


                <div class="row">


                    {/* <!-- BLOG POST #1 --> */}
                    <div class="col-md-6 col-lg-4">
                        <div id="bp-1-1" class="blog-post wow fadeInUp">

                            {/* <!-- BLOG POST IMAGE --> */}
                            <div class="blog-post-img">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src={blogImg} alt="blog-post-image" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            {/* <!-- BLOG POST TEXT --> */}
                            <div class="blog-post-txt">

                                {/* <!-- Post Tag --> */}
                                <p class="post-tag">News | August 03, 2023</p>

                                {/* <!-- Post Link --> */}
                                <h5 class="h5-md post-link">
                                    <a href="single-post.html">Quaerat sodales sapien and tempor diam euismod purus</a>
                                </h5>

                                {/* <!-- Text --> */}
                                <p class="mb-0">Velna purus purus magna ipsum suscipit egestas magna aliquam ipsum vitae...</p>

                            </div>


                        </div>
                    </div>
                    {/* <!-- END BLOG POST #1 --> */}


                    {/* <!-- BLOG POST #2 --> */}
                    <div class="col-md-6 col-lg-4">
                        <div id="bp-1-2" class="blog-post wow fadeInUp">

                            {/* <!-- BLOG POST IMAGE --> */}
                            <div class="blog-post-img">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src={blogImg} alt="blog-post-image" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            {/* <!-- BLOG POST TEXT --> */}
                            <div class="blog-post-txt">

                                {/* <!-- Post Tag --> */}
                                <p class="post-tag">Trends | July 31, 2023</p>

                                {/* <!-- Post Link --> */}
                                <h5 class="h5-md post-link">
                                    <a href="single-post.html">Luctus vitae and egestas</a>
                                </h5>

                                {/* <!-- Post Text --> */}
                                <p class="mb-0">Congue augue sagittis egestas integer velna purus purus magna suscipit...</p>

                            </div>

                        </div>
                    </div>
                    {/* <!-- END BLOG POST #2 --> */}


                    {/* <!-- BLOG POST #3 --> */}
                    <div class="col-md-12 col-lg-4">
                        <div id="bp-1-3" class="blog-post wow fadeInUp">

                            {/* <!-- BLOG POST IMAGE --> */}
                            <div class="blog-post-img">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src={blogImg} alt="blog-post-image" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            {/* <!-- BLOG POST TEXT --> */}
                            <div class="blog-post-txt">

                                {/* <!-- Post Tag --> */}
                                <p class="post-tag">Treatment | July 18, 2023</p>

                                {/* <!-- Post Link --> */}
                                <h5 class="h5-md post-link">
                                    <a href="single-post.html">Magna aliquam ipsum a vitae purus justo lacus ligula</a>
                                </h5>

                                {/* <!-- Post Text --> */}
                                <p class="mb-0">Congue augue sagittis egestas integer velna purus and magna
                                    ipsum suscipit...
                                </p>

                            </div>

                        </div>
                    </div>
                    {/* <!-- END BLOG POST #3 --> */}


                </div>
                {/* <!-- End row --> */}
            </div>
            {/* <!-- End container --> */}
        </section>
    );
};

export default OurTeam;
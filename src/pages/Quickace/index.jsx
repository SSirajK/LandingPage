import React from "react";

import { Img, Text, Button, PagerIndicator, List, Input } from "components";

const QuickacePage = () => {
  return (
    <>
      <div className="flex font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-white_A700 flex items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  flex flex-col gap-14 items-center justify-start p-8 sm:px-5 w-full">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
                <div className="h-[39px] md:h-[45px] md:mt-0 my-1.5 relative w-[21%] md:w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-black_900 text-left w-max"
                    as="h3"
                    variant="h3"
                  >
                    <Img
                      src="images/img_logo.svg"
                      className="h-[5px] w-auto float-right"
                      alt="logo"
                    />
                    Connect the Dots
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row font-nunito md:gap-5 items-start justify-start md:ml-[0] ml-[95px] w-[71%] md:w-full">
                  <div className="flex items-center justify-start md:mt-0 mt-3 w-auto md:w-full">
                    <Text
                      className="font-medium text-indigo_500 text-right w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Home
                    </Text>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[38px] md:mt-0 mt-3 text-bluegray_900 text-right w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Features
                  </Text>
                  <div className="flex font-poppins items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-[11px] w-auto md:w-full">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-right w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Services
                    </Text>
                  </div>
                  <div className="flex font-poppins items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-3.5 w-auto md:w-full">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-right w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Blog
                    </Text>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[42px] md:mt-0 mt-3 text-bluegray_900 text-right w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Contact us
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[108px] md:mt-0 mt-[13px] text-bluegray_900 text-right w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Login
                  </Text>
                  <Button className="bg-indigo_500 cursor-pointer font-medium leading-[normal] min-w-[133px] ml-10 md:ml-[0] py-[13px] rounded-md text-center text-lg text-white_A700 w-auto">
                    Sign Up
                  </Button>
                </div>
              </header>
              <div className="h-[546px] md:mt-24 md:h-[578px] max-w-[1131px] mb-[71px] mx-auto md:px-5 relative w-full">
                <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[50%]">
                  <Button className="bg-gray_50 cursor-pointer font-nunito font-semibold min-w-[200px] py-2.5 rounded-[10px] text-center text-indigo_500_99 text-sm w-auto">
                    Welcome to Connect the Dots..
                  </Button>
                  <Text
                    className="font-poppins leading-[150.00%] mt-[15px] text-bluegray_900 text-left"
                    as="h1"
                    variant="h1"
                  >
                    <>
                      Is this what you like to <br />
                      have for your organisation <br />& team?
                    </>
                  </Text>
                  <Text
                    className="font-nunito leading-[150.00%] mt-[55px] text-bluegray_600 text-left w-[48%] sm:w-full"
                    as="h4"
                    variant="h4"
                  >
                    Motivated individuals with a clear reason to come to work
                    happily every day?
                  </Text>
                  <PagerIndicator
                    className="flex h-[9px] mt-[3px] w-[81px]"
                    count={5}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[9px] bg-indigo_500 w-[9px]"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[9px] border-indigo_500 border border-solid bg-white_A700 w-[9px]"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
                  />
                  
                  <Button className="bg-indigo_500 cursor-pointer font-nunito font-semibold min-w-[240px] mt-[49px] py-[17px] rounded-md text-center text-lg text-white_A700 w-auto">
                    Try Free - Signup now
                  </Button>
                </div>
                <div className="absolute sm:hidden flex flex-col md:h-[383px] h-[545px] inset-y-[0] right-[0] w-[45%] sm:w-full">
                  <div className="absolute md:h-[383px] h-[545px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                    <div className="absolute bottom-[0] md:h-[383px] h-[498px] left-[0] w-[91%] sm:w-full">
                      <div className="absolute md:h-[383px] h-[482px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                        <div className="md:h-[383px] h-[482px] m-auto w-full">
                          <div className="md:h-[383px] h-[482px] m-auto w-full">
                            <div className="absolute flex items-center justify-start left-[0] top-[0] w-[92%]">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  src="images/img_vector91.svg"
                                  className="h-44 mt-[15px] w-auto"
                                  alt="vectorNinetyOne"
                                />
                                <Img
                                  src="images/img_group5724.svg"
                                  className="h-[86px] w-auto"
                                  alt="group5724"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[383px] items-end justify-end p-7 sm:px-5 right-[0] w-[91%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group15.svg')",
                              }}
                            >
                              <Img
                                src="images/img_contrast.svg"
                                className="h-[38px] mr-[55px] mt-72 w-auto"
                                alt="contrast"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_close.svg"
                            className="absolute h-[61px] inset-y-[0] left-[3%] my-auto w-auto"
                            alt="close"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex h-[352px] items-end justify-start p-[21px] sm:px-5 right-[7%] rounded-[30px] top-[5%] w-[82%]"
                          style={{
                            backgroundImage: "url('images/img_group16.svg')",
                          }}
                        >
                          <div className="bg-purple_100 h-3 mb-[279px] mt-[18px] rounded-[50%] w-3"></div>
                        </div>
                      </div>
                      <Img
                        src="images/img_isolationmode.svg"
                        className="absolute h-[78px] left-[36%] top-[0] w-auto"
                        alt="isolationmode"
                      />
                      <div
                        className="absolute bg-contain bg-bottom bg-no-repeat flex h-1/2 inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[72px] py-[72px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group17.svg')",
                        }}
                      >
                        <div className="bg-light_blue_100 h-3 mb-28 rounded-[50%] w-3"></div>
                      </div>
                    </div>
                    <div className="absolute sm:hidden h-[84px] left-[2%] top-[7%] w-[30%]">
                      <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-start justify-start p-[13px] right-[0] rounded-[3px] shadow-bs w-[84%]">
                        <Text
                          className="font-semibold text-bluegray_900_99 text-left w-auto"
                          variant="body3"
                        >
                          Manager
                        </Text>
                        <Img
                          src="images/img_map.svg"
                          className="h-[11px] w-auto"
                          alt="map"
                        />
                      </div>
                      <div className="absolute bg-orange_200 flex h-11 items-center justify-start left-[0] rounded-[50%] top-[0] w-11">
                        <Img
                          src="images/img_maskcopy3.png"
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          alt="maskcopyThree"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_vector89.svg"
                      className="absolute h-20 right-[0] top-[3%] w-auto"
                      alt="vectorEightyNine"
                    />
                    <div className="absolute bg-blue_50 h-[22px] right-[31%] rounded-[50%] top-[0] w-[22px]"></div>
                    <div className="absolute sm:hidden md:flex-col bg-white_A700 flex flex-row font-inter items-center justify-center md:p-1 p-[9px] right-[4%] rounded-[12px] shadow-bs top-[18%] w-2/5">
                      <div className="md:h-11 h-[55px] ml-1.5 p-0.5 relative w-14">
                        <div className="absolute flex h-max inset-y-[0] items-center justify-end left-[4%] my-auto outline outline-[1px] outline-blue_800 p-[3px] rounded-[50%] w-11">
                          <div className="bg-orange_200 flex h-[37px] items-center justify-start rounded-[18px] w-[37px]">
                            <Img
                              src="images/img_bgcopy2.png"
                              className="h-[37px] md:h-auto rounded-[50%] w-[37px]"
                              alt="bgcopyTwo"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-green_400 border-2 border-solid border-white_A700 h-4 right-[7%] rounded-[50%] top-[4%] w-4"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[5px] w-auto">
                        <Text
                          className="font-poppins text-bluegray_601 text-left w-auto"
                          variant="body1"
                        >
                          Gavin Henry
                        </Text>
                        <Text
                          className="font-inter font-semibold text-bluegray_400 text-left w-auto"
                          variant="body2"
                        >
                          Great Work!!
                        </Text>
                      </div>
                      <div className="flex h-[29px] items-center justify-start mx-[5px] w-[29px]">
                        <Text
                          className="bg-deep_purple_A200_7f flex font-bold h-[29px] items-center justify-center rounded-[14px] text-center text-white_A700 w-[29px]"
                          variant="body3"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute sm:hidden bg-white_A700 bottom-[8%] flex items-center justify-end left-[0] md:py-0 p-3.5 rounded-[15px] shadow-bs1 w-[40%]">
                    <div className="flex md:flex-col md:gap-0 flex-row gap-4 items-center justify-between w-[95%] md:w-full">
                      <Button className="bg-deep_orange_50 flex h-[47px] items-center justify-center my-[5px] p-2.5 rounded-[23px] w-[47px]">
                        <Img
                          src="images/img_icon.svg"
                          className="h-[25px]"
                          alt="icon"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-medium font-poppins text-bluegray_401 text-left w-auto"
                          variant="body2"
                        >
                          Notification
                        </Text>
                        <Text
                          className="font-inter font-semibold leading-[20.00px] mt-[3px] text-bluegray_901 text-left w-full"
                          variant="body2"
                        >
                          Your goal has been set & the due date..
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo_A201 flex items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex h-[calc(100% - 200px)] items-center justify-start p-4 w-full"
                style={{ backgroundImage: "url('images/img_group14.svg')" }}
              >
                <div className="flex flex-col items-start justify-start max-w-[1072px] mb-[95px] mx-auto md:px-5 w-full">
                  <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start w-[38%] md:w-full">
                    <div className="flex flex-col gap-[33px] justify-start w-[78%] sm:w-full">
                      <div className="bg-blue_50_75 h-6 md:ml-[0] ml-[239px] mr-[45px] rounded-[50%] w-6"></div>
                      <Text
                        className="text-left text-white_A700 w-auto"
                        as="h2"
                        variant="h2"
                      >
                        How can we help
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] justify-start sm:mt-0 mt-[17px] w-[22%] sm:w-full">
                      <Img
                        src="images/img_vector89.svg"
                        className="h-[85px] w-[84px]"
                        alt="vectorEightyNine_One"
                      />
                      <div className="bg-purple_100_75 h-2 md:ml-[0] ml-[18px] mr-[58px] rounded-[50%] w-2"></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-nunito md:gap-[53px] items-start justify-between mt-[62px] w-full">
                    <div className="block pr-8">
                      <div className="bg-white_A700 flex h-20 items-center justify-start p-[9px] rounded-[10px] shadow-bs2 w-[70px]">
                        <Img
                          src="images/img_iconfilled.svg"
                          className="h-14 mb-1.5 w-14"
                          alt="iconfilled"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] text-left text-white_A700 w-auto mt-20"
                        as="h5"
                        variant="h5"
                      >
                        How we can help to find your vision, reach the goals,
                        see the leader in you, efficiently Deliver Value, get
                        the best of yourself
                      </Text>
                    </div>
                    <div className="block pr-8">
                      <div className="bg-white_A700 flex h-20 items-center justify-start p-3 rounded-[10px] shadow-bs2 w-[70px]">
                        <Img
                          src="images/img_iconfilled_pink_a200.svg"
                          className="h-14 w-14"
                          alt="iconfilled"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] mt-20 text-left text-shadow-ts text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        We can help by providing a minimum viable process and
                        tool to see the change you wish to see in your
                        organization.
                      </Text>
                    </div>
                    <div className="block">
                      <div className="bg-white_A700 flex h-20 items-center justify-start p-[11px] rounded-[10px] shadow-bs2 w-[70px]">
                        <Img
                          src="images/img_location.svg"
                          className="h-14 w-14"
                          alt="location"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] mt-20 text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        If you believe in something and the future depends on
                        it, let’s CONNECT the DOTS...
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="bg-gradient1 flex justify-between mx-auto p-[67px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-6 justify-start mb-[42px] md:ml-[0] ml-[41px] w-[100%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[588px] text-bluegray_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Features
                  </Text>
                  <div className="flex md:flex-col flex-row font-nunito md:gap-10 items-start justify-between w-full">
                    <Img
                      src="images/img_objects.svg"
                      className="h-[448px] w-auto"
                      alt="objects"
                    />
                    <div className="flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-1 w-[529px] md:w-full">
                      <div className="bg-white_A700_99 flex sm:flex-col flex-row gap-[33px] items-center justify-evenly p-[17px] rounded-[12px] shadow-bs w-full">
                        <Img
                          src="images/img_download.svg"
                          className="h-10 w-10"
                          alt="download"
                        />
                        <Text
                          className="sm:flex-1 font-semibold leading-[150.00%] text-bluegray_600 text-left w-[79%] sm:w-full"
                          as="h6"
                          variant="h6"
                        >
                          Help to achieve what is planned to do a month, Quarter
                          or year before by engaging everyone
                        </Text>
                      </div>
                      <div className="bg-white_A700_99 flex sm:flex-col flex-row gap-[33px] items-center justify-evenly p-[17px] rounded-[12px] shadow-bs w-full">
                        <Img
                          src="images/img_user.svg"
                          className="h-10 w-10"
                          alt="user"
                        />
                        <Text
                          className="sm:flex-1 font-semibold leading-[150.00%] text-bluegray_600 text-left w-[79%] sm:w-full"
                          as="h6"
                          variant="h6"
                        >
                          Empirically develop strong leadership qualities in
                          Individuals and Teams
                        </Text>
                      </div>
                      <div className="bg-white_A700_99 flex sm:flex-col flex-row gap-[33px] items-center justify-evenly p-[17px] rounded-[12px] shadow-bs w-full">
                        <Img
                          src="images/img_offer.svg"
                          className="h-10 w-10"
                          alt="iconfilled"
                        />
                        <Text
                          className="sm:flex-1 font-semibold leading-[150.00%] text-bluegray_600 text-left w-[79%] sm:w-full"
                          as="h6"
                          variant="h6"
                        >
                          Business Alignment with Goals, Execution <br />
                            and Targets
                        </Text>
                      </div>
                      <div className="bg-white_A700_99 flex sm:flex-col flex-row gap-[33px] items-center justify-evenly p-[17px] rounded-[12px] shadow-bs w-full">
                        <Img
                          src="images/img_iconfilled_indigo_500.svg"
                          className="h-10 w-10"
                          alt="iconfilled"
                        />
                        <Text
                          className="sm:flex-1 font-semibold leading-[150.00%] text-bluegray_600 text-left w-[79%] sm:w-full"
                          as="h6"
                          variant="h6"
                        >
                          Goal Tracking, Subscribing to Goal, effective
                          tracking, discussion forum
                        </Text>
                      </div>
                      <div className="bg-white_A700_99 flex sm:flex-col flex-row gap-[33px] items-center justify-evenly p-[17px] rounded-[12px] shadow-bs w-full">
                        <Img
                          src="images/img_clock.svg"
                          className="h-10 w-10"
                          alt="iconfilled"
                        />
                        <Text
                          className="sm:flex-1 font-semibold leading-[150.00%] text-bluegray_600 text-left w-[79%] sm:w-full"
                          as="h6"
                          variant="h6"
                        >
                          Self Reviews, Feedback, Notifications
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_51 font-nunito sm:h-[669px] md:h-[639px] h-[329px] mt-[-26px] mx-auto pt-[45px] w-full z-[1]">
                <div className="flex items-center justify-start mb-[-66.98px] mt-auto mx-auto w-[79%] z-[1]">
                  <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex md:flex-1 items-center justify-start w-auto md:w-full">
                            <Text
                              className="font-medium leading-[38.00px] text-bluegray_600 text-left break-all"
                              as="h6"
                              variant="h6"
                            >
                              <>
                              <span className="text-bluegray_900">
                                  Contact Details
                                </span>{" "}<br/>
                                2093, Philadelphia Pike, DE 19703, Claymont{" "}
                                <br />
                                Companyname@connectingthedots.com
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[123px] w-auto md:w-full">
                            <Text
                              className="font-medium leading-[38.00px] text-indigo_500 text-left"
                              as="h6"
                              variant="h6"
                            >
                              <>
                                <span className="text-bluegray_900">
                                  Company
                                </span>{" "}
                                <br />
                                About <br />
                                Tide
                                <br />
                                Careers
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[167px] w-auto md:w-full">
                            <Text
                              className="font-medium leading-[38.00px] text-indigo_500 text-left"
                              as="h6"
                              variant="h6"
                            >
                              <>
                                <span className="text-bluegray_900">Help</span>{" "}
                                <br />
                                Support and FAQs <br />
                                Contact Us
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[74px] w-auto md:w-full">
                            <Text
                              className="font-medium leading-[38.00px] text-indigo_500 text-left"
                              as="h6"
                              variant="h6"
                            >
                              <>
                                <span className="text-bluegray_900">
                                  Legal
                                </span>{" "}<br/>
                                Privacy Policy <br />
                                Terms and Conditions
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 mt-[10px] items-center justify-between w-[99%] md:w-full">
                      <div className="flex font-poppins items-center justify-start w-auto sm:w-full">
                        <div className="h-[39px] relative w-full">
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-black_900 text-left w-max"
                            as="h3"
                            variant="h3"
                          >
                            <Img
                              src="images/img_logo.svg"
                              className="h-[5px] w-auto float-right"
                              alt="logo"
                            />
                            Connect the Dots
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-medium font-nunito text-bluegray_900 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        © 2023 Connecting the dots. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-gray_103 h-[97px] mt-auto mx-auto rotate-[-180deg] w-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickacePage;

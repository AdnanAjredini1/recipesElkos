
import "./view-recipe.css";
import FavoriteIcon from "./view-recipe-assets/favorite-svgrepo-com(2).svg?react";
import CloseButton from "./view-recipe-assets/close-bold-svgrepo-com.svg?react";
import SendIcon from "./view-recipe-assets/send-2-svgrepo-com.svg?react";
import CommentsIcon from "./view-recipe-assets/comments-3-svgrepo-com.svg?react";
import DropDownIcon from "./view-recipe-assets/down-sign-svgrepo-com.svg?react"
import { useState } from "react";
import { motion } from "framer-motion";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";

function ViewRecipe({ isBackdrop, setIsBackDrop, image }) {
  const [like, setLike] = useState(false);
  const [isCommentsFieldOpen, setIsCommentsFieldOpen] = useState(false);
  return (
    <div className="viewRecipeWrapper">
      <motion.div 
      initial={{ y: 80, opacity: 0,display:'none' }} 
      animate={isCommentsFieldOpen ? { y: 0, opacity: 1,display:'block' } : { y: 100, opacity: 0 ,display:'none'}} 
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="commentsWrapper">
        <DropDownIcon className="dropDownIcon" onClick={() => setIsCommentsFieldOpen(!isCommentsFieldOpen)}/>
        <div className="commentsPlace">
        <MDBContainer className="mt-5 mdbContainerClass" >
      <MDBRow className="justify-content-center mdbRowClass">
        <MDBCol md="8" lg="6" style={{width:'100%',height:'100%'}} className="mdbColClass">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5", width:'100%',height:'100%' }}
          >
            <MDBCardBody>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Leave a comment" />

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">4</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                <p>Type your note, and hit enter to add it</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Mary Kate</p>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary">
                      <p className="small mb-0">Upvoted</p>
                      <MDBIcon
                        fas
                        icon="thumbs-up mx-2 fa-xs"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small mb-0">2</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">
                    
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    
      </motion.div>
      <div className="leftPart">
        <button
          onClick={() => {
            setIsBackDrop(!isBackdrop);
          }}
          className="closeButtonForViewRecipe2"
        >
          <CloseButton className="closeButton" />
        </button>
        <div
          className="imageViewRecipe"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <FavoriteIcon
          className={`favoriteIcon  ${like ? "isLike" : ""}`}
          onClick={() => setLike(!like)}
          alt="Like"
        />
      </div>
      <div className="rightPart">
        <button
          onClick={() => {
            setIsBackDrop(!isBackdrop);
          }}
          className="closeButtonForViewRecipe"
        >
          <CloseButton className="closeButton" />
        </button>
        <p className="viewTitleFood">Caesar Salad</p>
        <p className="recipeDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <FavoriteIcon
          className={`favoriteIcon2  ${like ? "isLike" : ""}`}
          onClick={() => setLike(!like)}
          alt="Like"
        />
        <CommentsIcon className="commentsIcon" onClick={() => setIsCommentsFieldOpen(true)}/>
        {/* <div className="comments">
          <form className="sendCommentForm">
            <input type="search" className="sendInput" placeholder="Write your comment here..." />
            <button className="sendSubmitButton" type="submit">
                <SendIcon className="sendIcon" />
            </button>

          </form>
          <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p> <p>fsdfasdfdfdf</p>
          <p>fsdfasdfdfdf</p>
        </div> */}
      </div>
    </div>
  );
}

export default ViewRecipe;

import "./view-recipe.css";
import FavoriteIcon from "./view-recipe-assets/favorite-svgrepo-com(2).svg?react";
import CloseButton from "./view-recipe-assets/close-bold-svgrepo-com.svg?react";
import SendIcon from "./view-recipe-assets/send-2-svgrepo-com.svg?react";
import CommentsIcon from "./view-recipe-assets/comments-3-svgrepo-com.svg?react";
import DropDownIcon from "./view-recipe-assets/down-sign-svgrepo-com.svg?react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useSelector } from "react-redux";

function ViewRecipe({
  isBackdrop,
  setIsBackDrop,
  image,
  foodName,
  foodDescription,
  post_id,
}) {
  const [like, setLike] = useState(false);
  const [isCommentsFieldOpen, setIsCommentsFieldOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commented, setIsCommented] = useState(false);

  const userProfile = useSelector((state) => state.userProfile.user);
  const user_id = userProfile.userId;
  const userName = userProfile.userName;
  

  const postId = post_id;

  useEffect(() => {
    if (isBackdrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBackdrop]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const payload = { post_id: postId, content: newComment };

    try {
      const response = await axios.post(
        "https://recipe-back-two.vercel.app/comment",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const notificationPayload = {
        userId: user_id, 
        message: `You have a new comment from ${userName} ! `,
        type: "like",
        postId: postId
    };
      const responseFromNotifications = await axios.post(
        "https://recipe-back-two.vercel.app/notification", 
        notificationPayload, 
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    );
    console.log(responseFromNotifications);
    
      console.log(response.data, "response from auth status");
      setIsCommented(!commented);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://recipe-back-two.vercel.app/comments/${postId}`,
          { withCredentials: true }
        );

        setComments(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, [postId, commented]);

  const handleLike = async () => {
    const payload = { post_id: postId };

    try {
      const response = await axios.post("https://recipe-back-two.vercel.app/like", payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const notificationPayload = {
        userId: user_id, 
        message: `${userName} liked your post!`,
        type: "like",
        postId: postId
    };
    const responseFromNotifications = await axios.post(
        "https://recipe-back-two.vercel.app/notification", 
        notificationPayload, 
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    );
     console.log(responseFromNotifications, "responseFromNotifications is thereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
     
      console.log(response.data);
      setLike(true);
    } catch (err) {
      console.log(err);
      console.log("delete failed");
    }
  };

  const handleUnLike = async () => {
    const payload = { post_id: postId };

    try {
      const response = await axios.delete("https://recipe-back-two.vercel.app/like", {
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data);
      setLike(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const response = await axios.get(
          `https://recipe-back-two.vercel.app/like/${postId}`,
          {
            withCredentials: true,
          }
        );

        console.log(response.data);

        if (response.data.isLiked) {
          setLike(true);
        } else {
          setLike(false);
        }
      } catch (error) {
        console.error("Error checking like status:", error);
      }
    };
    checkIfLiked();
  }, [postId]);

  return (
    <div className="viewRecipeWrapper">
      <motion.div
        initial={{ y: 80, opacity: 0, display: "none" }}
        animate={
          isCommentsFieldOpen
            ? { y: 0, opacity: 1, display: "block" }
            : { y: 100, opacity: 0, display: "none" }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        className="commentsWrapper"
      >
        <DropDownIcon
          className="dropDownIcon"
          onClick={() => setIsCommentsFieldOpen(!isCommentsFieldOpen)}
        />
        <div className="commentsPlace">
          <MDBContainer className="mt-5 mdbContainerClass">
            <MDBRow className="justify-content-center mdbRowClass">
              <MDBCol
                md="8"
                lg="6"
                style={{ width: "100%", height: "100%" }}
                className="mdbColClass"
              >
                <MDBCard
                  className="shadow-0 border"
                  style={{
                    backgroundColor: "#f0f2f5",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <MDBCardBody>
                    <form onSubmit={handleCommentSubmit} className="mb-4">
                      <MDBInput
                        wrapperClass="mb-2"
                        placeholder="Type comment..."
                        label="+ Leave a comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      >
                        <SendIcon
                          width={30}
                          height={30}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "5px",
                            cursor: "pointer",
                          }}
                          onClick={handleCommentSubmit}
                        />
                      </MDBInput>
                    </form>

                    {comments.map((comment, index) => (
                      <MDBCard className="mb-4" key={index}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <MDBCardImage
                                src={comment.user_image}
                                alt="avatar"
                                width="35"
                                height="35"
                               
                              />
                              <p className="small mb-0 ms-2">{comment.username}</p>
                            </div>
                            <div className="d-flex flex-row align-items-center"></div>
                          </div>
                          <p style={{ marginTop: "15px" }}>
                            {comment.content}{" "}
                          </p>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
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
          onClick={like ? handleUnLike : handleLike}
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
        <p className="viewTitleFood">{foodName}</p>
        <p className="recipeDescription">{foodDescription}</p>
        <FavoriteIcon
          className={`favoriteIcon2  ${like ? "isLike" : ""}`}
          onClick={like ? handleUnLike : handleLike}
          alt="Like"
        />
        <CommentsIcon
          className="commentsIcon"
          onClick={() => setIsCommentsFieldOpen(true)}
        />
      </div>
    </div>
  );
}

export default ViewRecipe;

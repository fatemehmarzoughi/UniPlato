/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { connect } from "react-redux";
import { getAllPosts } from "@src/actions";
import { AppStates } from "@src/core/types";
import Posts from "./posts";

const mapStateToProps = (state: AppStates) => {
  return {
    postsStates: state.postsStates
  }
}

const mapDispatchToProps = {
  getAllPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
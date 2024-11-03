import { Router } from "express";
import castService from "../services/castService.js";
import movieService from "../services/movieService.js";

const router = Router();

function toArray(documents) {
  return documents.map((document) => document.toObject());
}

// ------ GET ---------
router.get("/create", (req, res) => {
  res.render("movies/create");
});

router.get("/search", async (req, res) => {
  const filter = req.query;
  const movies = await movieService.getAll(filter);

  res.render("home", { isSearch: true, movies: toArray(movies), filter });
});

router.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  const isOwner = req.user?._id == movie.owner;
  console.log(req.user?._id);

  movie.ratingView = getRatingViewData(movie.rating);

  res.render("movies/details", { movie, isOwner });
});

router.get("/:movieId/attach", async (req, res) => {
  const movieId = req.params.movieId;

  const movie = await movieService.getOne(movieId).lean();
  const cast = await castService.getAllWithout(movie.casts).lean();

  res.render("movies/cast-attach", { movie, cast });
});

router.get("/:movieId/delete", async (req, res) => {
  const movieId = req.params.movieId;

  await movieService.remove(movieId);

  res.redirect("/");
});

router.get("/:movieId/edit", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();

  res.render("movies/edit", { movie });
});

// ------ POST ---------
router.post("/create", async (req, res) => {
  const movieData = req.body;
  const ownerId = req.user?._id;
  // console.log(ownerId);

  await movieService.create(movieData, ownerId);

  res.redirect("/");
});

router.post("/:movieId/attach", async (req, res) => {
  const movieId = req.params.movieId;
  const castId = req.body.cast;

  await movieService.attach(movieId, castId);

  res.redirect(`/movies/${movieId}/details`);
});

router.post(":/movieId/edit", async (req, res) => {
  const movieId = req.params.movieId;

  await movieService.edit(movieId);

  res.redirect(`/movies/${movieId}/details`);
});

function getRatingViewData(rating) {
  if (!Number.isInteger(rating)) {
    return "na";
  }
  return "&#x2605;".repeat(rating);
}

export default router;

# The Walker
In the `index.html` file lives a friendly captive .gif known only as *The Walker*. At present, The Walker only knows how to walk in place, but he has hired us to imbue him with more dynamic behavior. His specifications are below.

## Client Specs
* By default, The Walker would like to start at the right border and walk left.
* When The Walker crosses the threshold of either border, he would like to turn around.

## Stuck?  Lost?  Not sure where to start?

Try starting from the "walking_right" branch.  The walker is already walking across the screen, you just have to make him start from the right and walk left.

1. First, ensure your changes are committed (or discarded).  You should have a "clean" `git status`.
- Within the "the_walker" dir, enter this command:
  ```
  git checkout walking_right
  ```
  This will change the files in your working directory to match the "walking_right" branch (or snapshot) in git.
- Make the walker start from the right and walk left (subtract from his position, rather than add to it).

## Bonus Spec

* When clicked, The Walker would like to change direction.

## Further review

Once completed, compare your solution to the one [we did](https://github.com/ga-dc/the_walker/tree/solution).

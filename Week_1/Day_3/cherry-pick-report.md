# Cherry-pick Report – Day 3

## Objective
Bring only required changes from main branch into release/v0.1 using cherry-pick.

## Steps Followed

1. Switched to release branch:
   git checkout release/v0.1

2. Tried to cherry-pick required commit:
   git cherry-pick ba72cc6

3. A merge conflict occurred because the same file was already modified
   differently in the release branch.

4. Conflict was resolved manually.

5. After resolution, Git reported that the cherry-pick was empty because
   the changes were already present in the release branch.

6. Skipped the empty cherry-pick:
   git cherry-pick --skip

## Result
- No new commit was created.
- Release branch already contained the required changes.
- Cherry-pick process completed cleanly.

## Conclusion
Cherry-pick was handled successfully with proper conflict resolution.


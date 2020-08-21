function a() {
    if (a)
        foo(); bar(); // AMBIGUOUS_BRANCH_BODY alarm
}

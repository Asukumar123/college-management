-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "cityId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegePlacement" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "highestPlacement" DOUBLE PRECISION,
    "averagePlacement" DOUBLE PRECISION,
    "medianPlacement" DOUBLE PRECISION,
    "placementRate" DOUBLE PRECISION,

    CONSTRAINT "CollegePlacement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegeWiseCourse" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseDuration" TEXT NOT NULL,
    "courseFee" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CollegeWiseCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegePlacement" ADD CONSTRAINT "CollegePlacement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeWiseCourse" ADD CONSTRAINT "CollegeWiseCourse_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

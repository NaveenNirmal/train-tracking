package com.tracker.tracker.repositories;

import com.tracker.tracker.models.entities.Schedule;
import com.tracker.tracker.models.entities.Station;
import java.time.OffsetDateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, UUID> {

    List<Schedule> findByDeletedOrderByCreatedTimeDesc(Boolean deleted);

    List<Schedule> findByTrain_Stations_IdAndTrain_Stations_IdAndDepartureTimeBetween(
        UUID fromStationId, UUID toStationId, OffsetDateTime departureTimeStart,
        OffsetDateTime departureTimeEnd);



}
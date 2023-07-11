package com.tracker.tracker.models.entities;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Train {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private UUID id;
  private String name;
  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "train_class_id")
  private Class train_class;

  @ManyToMany
  @JoinTable(name = "train_stations",
      joinColumns = @JoinColumn(name = "train_id"),
      inverseJoinColumns = @JoinColumn(name = "stations_id"))
  private List<Station> routes = new ArrayList<>();

}
